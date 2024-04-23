import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

type Tarefa = {
  id: number;
  descricao: string;
  feita: boolean;
};

const HomeScreen = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [textoAtual, setTextoAtual] = useState('');

  const handleAdicionarTarefa = (descricao: string) => {
    const novaTarefa: Tarefa = {
      id: tarefas.length + 1,
      descricao: descricao,
      feita: false,
    };

    setTarefas([...tarefas, novaTarefa]);
  };

  const handleLimparTarefas = () => {
    setTarefas([]);
  };

  return (
    <View>
      <Text style={styles.tituloCentro}>Adicione uma tarefa ai leso</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa"
        onChangeText={texto => setTextoAtual(texto)}
      />
      <Button
        title="Adicionar"
        onPress={() => handleAdicionarTarefa(textoAtual)}
      />

      <Button title="Limpar" color={'red'} onPress={handleLimparTarefas} />

      {tarefas.map(tarefa => (
        <Text key={tarefa.id}>{tarefa.descricao}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tituloCentro: {
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default HomeScreen;
