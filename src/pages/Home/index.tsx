import { Play } from 'phosphor-react';
import {
  StartCountdownButton,
  MinutesAmountInput,
  CountdownContainer,
  HomerContainer,
  FormContainer,
  Separator,
  TaskInput,
} from './styles';

export function Home() {
  return (
    <HomerContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            type="text"
            id="task"
          />
          <datalist id="task-suggestions">
            <option value="Agua" />
          </datalist>

          <label htmlFor="minutesAmount"> durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Iniciar
        </StartCountdownButton>
      </form>
    </HomerContainer>
  );
}
