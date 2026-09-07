import React, { useState } from 'react';

import {
  Box,
  Typography,
  IconButton,
  TextField,
  CircularProgress,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';


const Chatbot = ({ open, onClose }) => {

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi I am Nova! How can I help you today?',
    },
  ]);

  const [loading, setLoading] = useState(false);


  const sendMessage = async () => {

    const text = message.trim();

    if (!text || loading) {
      return;
    }


    // Add user's message
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: text,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setMessage('');
    setLoading(true);


    try {

      const backendUrl =
        import.meta.env.VITE_BACKEND_URL ||
        'http://127.0.0.1:8000';


      const response = await fetch(
        `${backendUrl}/api/ai-chat`,
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },

          body: JSON.stringify({
            message: text,
          }),
        }
      );


      const data = await response.json();


      if (!response.ok || !data.success) {

        throw new Error(
          data.message ||
          'Unable to get AI response.'
        );
      }


      // Add AI response
      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: data.message,
        },
      ]);

    } catch (error) {

      console.error(
        'Chatbot error:',
        error
      );


      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text:
            'Sorry, I am unable to respond right now. Please try again.',
        },
      ]);

    } finally {

      setLoading(false);

    }
  };


  const handleKeyDown = (event) => {

    if (
      event.key === 'Enter' &&
      !event.shiftKey
    ) {
      event.preventDefault();
      sendMessage();
    }

  };


  if (!open) {
    return null;
  }


  return (
    <Box
      sx={{
        position: 'fixed',

        right: {
          xs: 12,
          sm: 20,
          md: 24,
        },

        bottom: {
          xs: 75,
          sm: 85,
          md: 95,
        },

        width: {
          xs: 'calc(100vw - 24px)',
          sm: 380,
        },

        height: {
          xs: 400,
          sm: 450,
        },

        backgroundColor: '#ffffff',

        borderRadius: '18px',

        overflow: 'hidden',

        boxShadow:
          '0 20px 60px rgba(0, 0, 0, 0.25)',

        zIndex: 10000,

        display: 'flex',

        flexDirection: 'column',
      }}
    >

      {/* =========================
          HEADER
      ========================== */}

      <Box
        sx={{
          height: 64,

          flexShrink: 0,

          display: 'flex',

          alignItems: 'center',

          justifyContent: 'space-between',

          px: 2,

          background:
            'linear-gradient(135deg, #10B981 0%, #059669 100%)',

          color: '#ffffff',
        }}
      >

        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 700,
          }}
        >
          Nova
        </Typography>


        <IconButton
onClick={onClose}
          aria-label="Close chat"
          sx={{
            color: '#ffffff',

            '&:hover': {
              backgroundColor:
                'rgba(255,255,255,0.12)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

      </Box>


      {/* =========================
          CHAT MESSAGES
      ========================== */}

      <Box
        sx={{
          flex: 1,

          overflowY: 'auto',

          p: 2,

          backgroundColor: '#f8fafc',

          display: 'flex',

          flexDirection: 'column',

          gap: 1.5,

          '&::-webkit-scrollbar': {
            width: '5px',
          },

          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#cbd5e1',
            borderRadius: '10px',
          },
        }}
      >

        {messages.map((item) => (

          <Box
            key={item.id}
            sx={{
              display: 'flex',

              justifyContent:
                item.sender === 'user'
                  ? 'flex-end'
                  : 'flex-start',
            }}
          >

            <Box
              sx={{
                NovaWidth: '80%',

                px: 1.8,

                py: 1.3,

                borderRadius:
                  item.sender === 'user'
                    ? '16px 16px 4px 16px'
                    : '16px 16px 16px 4px',

                backgroundColor:
                  item.sender === 'user'
                    ? '#10B981'
                    : '#ffffff',

                color:
                  item.sender === 'user'
                    ? '#ffffff'
                    : '#334155',

                boxShadow:
                  item.sender === 'bot'
                    ? '0 2px 8px rgba(0,0,0,0.06)'
                    : 'none',
              }}
            >

              <Typography
                sx={{
                  fontSize: '14px',

                  lineHeight: 1.6,

                  whiteSpace: 'pre-wrap',

                  wordBreak: 'break-word',
                }}
              >
                {item.text}
              </Typography>

            </Box>

          </Box>

        ))}


        {/* LOADING */}

        {loading && (

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >

            <Box
              sx={{
                backgroundColor: '#ffffff',

                borderRadius:
                  '16px 16px 16px 4px',

                px: 2,

                py: 1.5,

                boxShadow:
                  '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >

              <CircularProgress
                size={18}
                thickness={5}
              />

            </Box>

          </Box>

        )}

      </Box>


      {/* =========================
          INPUT AREA
      ========================== */}

      <Box
        sx={{
          p: 1.5,

          backgroundColor: '#ffffff',

          borderTop:
            '1px solid #e2e8f0',

          display: 'flex',

          alignItems: 'center',

          gap: 1,
        }}
      >

        <TextField
          fullWidth

          size="small"

          placeholder="Type a message..."

          value={message}

          onChange={(event) =>
            setMessage(event.target.value)
          }

          onKeyDown={handleKeyDown}

          disabled={loading}

          multiline

          NovaRows={3}

          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',

              backgroundColor: '#f8fafc',
            },
          }}
        />


        <IconButton
          onClick={sendMessage}

          disabled={
            !message.trim() ||
            loading
          }

          aria-label="Send message"

          sx={{
            width: 44,

            height: 44,

            flexShrink: 0,

            color: '#ffffff',

            background:
              'linear-gradient(135deg, #10B981 0%, #059669 100%)',

            '&:hover': {
              background:
                'linear-gradient(135deg, #059669 0%, #047857 100%)',
            },

            '&.Mui-disabled': {
              color: '#ffffff',

              backgroundColor: '#cbd5e1',
            },
          }}
        >

          <SendIcon
            sx={{
              fontSize: 21,
            }}
          />

        </IconButton>

      </Box>


      {/* =========================
          POWERED BY
      ========================== */}

      <Box
        sx={{
          textAlign: 'center',

          py: 0.7,

          backgroundColor: '#ffffff',
        }}
      >

        <Typography
          sx={{
            fontSize: '10px',

            color: '#94a3b8',
          }}
        >
          Powered by AI
        </Typography>

      </Box>

    </Box>
  );
};


// IMPORTANT:
// This is what fixes:
// "does not provide an export named default"

export default Chatbot;