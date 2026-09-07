<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class AIChatController extends Controller
{
    public function chat(Request $request)
    {
        $request->validate([
            'message' => 'required|string|max:2000',
        ]);

        $apiKey = config('services.openai.api_key');
        $model = config('services.openai.model', 'gpt-5.6-luna');

        if (!$apiKey) {
            return response()->json([
                'success' => false,
                'message' => 'OpenAI API key is missing from Laravel.',
            ], 500);
        }

        try {
            $response = Http::withToken($apiKey)
                ->acceptJson()
                ->post('https://api.openai.com/v1/responses', [
                    'model' => $model,
                    'input' => $request->message,
                ]);

            Log::info('OpenAI response', [
                'status' => $response->status(),
                'body' => $response->json(),
            ]);

            if (!$response->successful()) {
                return response()->json([
                    'success' => false,
                    'message' => 'OpenAI API error.',
                    'error' => $response->json(),
                ], $response->status());
            }

            $data = $response->json();

            $answer = $data['output'][0]['content'][0]['text']
                ?? $data['output_text']
                ?? 'No response received from AI.';

            return response()->json([
                'success' => true,
                'message' => $answer,
            ]);

        } catch (\Throwable $e) {

            Log::error('AI Chat Error', [
                'message' => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}