import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';

export default function NavIcon({navigation}) {
  return (
    <ScrollView>
      <Text>NavIcon 테스트</Text>
      <Button
        title="HomeScreen"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Text> </Text>
      <Button
        title="LoadingSec"
        onPress={() => navigation.navigate('LoadingSec')}
      />
      <Text> </Text>
      <Button title="Main" onPress={() => navigation.navigate('Main')} />
      <Text> </Text>
      <Button
        title="ImageCaption"
        onPress={() => navigation.navigate('ImageCaption')}
      />
      <Text> </Text>
      <Button
        title="WriteDiary"
        onPress={() => navigation.navigate('WriteDiary')}
      />
      <Text> </Text>
      <Button
        title="ParentSetting"
        onPress={() => navigation.navigate('ParentSetting')}
      />
      <Text> </Text>
      <Button
        title="SelectImage"
        onPress={() => navigation.navigate('SelectImage')}
      />
      <Text> </Text>
      <Button
        title="DiaryList"
        onPress={() => navigation.navigate('DiaryList')}
      />
      <Text> </Text>
      <Button
        title="GrammarCheck"
        onPress={() => navigation.navigate('GrammarCheck')}
      />
      <Text> </Text>
      <Button title="Diary" onPress={() => navigation.navigate('Diary')} />
    </ScrollView>
  );
}
