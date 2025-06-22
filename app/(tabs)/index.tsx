import { useState } from 'react';
import { TextInput, View } from 'react-native';

export default function Example() {
  const [firstName, setFirstName] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        style={{
          borderWidth: 1,
          padding: 10,
          width: '80%',
          marginBottom: 20,
        }}
      />
    </View>
  );
}