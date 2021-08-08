import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { Button, ButtonIcon, Container, Icon, Input as InputStyle, InputContainer } from './styles';

export function Input() {
  const [message, setMessage] = useState<string>('');
  const [showSendMessage, setShowSendMessage] = useState<boolean>(false);

  useEffect(() => {
    if (message.trim().length > 0) {
      setShowSendMessage(true);
    } else {
      setShowSendMessage(false);
    }
  }, [message]);

  function handleSendMessage() {
    setMessage('');
  }

  return (
    <Container>
      <InputContainer>
        <Icon name="emoji-emotions" />

        <InputStyle
          value={message}
          onChangeText={(value) => setMessage(value)}
          multiline
          placeholder="Type a message"
        />

        <Icon name="attach-file" />
        {!showSendMessage && <Icon style={{ marginLeft: 10 }} name="camera-alt" />}
      </InputContainer>

      {showSendMessage ? (
        <Button onPress={handleSendMessage}>
          <ButtonIcon name="send" />
        </Button>
      ) : (
        <Button>
          <ButtonIcon name="mic" />
        </Button>
      )}
    </Container>
  );
}
