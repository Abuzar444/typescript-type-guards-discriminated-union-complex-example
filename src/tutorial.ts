type Addition = {
  value: number;
  user: string;
  timestamps: number;
  type: "add";
};

type Subtraction = {
  value: number;
  user: string;
  timestamps: number;
  type: "subtract";
};

type Multiplication = {
  value: number;
  user: string;
  timestamps: number;
  type: "multiply";
};

type Division = {
  value: number;
  user: string;
  timestamps: number;
  type: "division";
};

type Action = Addition | Subtraction | Multiplication | Division;

interface CalculatorState {
  result: number;
  history: Action[];
}

const calculatorState = (
  state: CalculatorState,
  action: Action
): CalculatorState => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        result: state.result + action.value,
        history: [...state.history, action],
      };
    case "subtract":
      return {
        ...state,
        result: state.result - action.value,
        history: [...state.history, action],
      };
    case "multiply":
      return {
        ...state,
        result: state.result * action.value,
        history: [...state.history, action],
      };
    case "division":
      if (action.value === 0) {
        throw new Error(`value cann't be divided by ${0}`);
      }
      return {
        ...state,
        result: state.result / action.value,
        history: [...state.history, action],
      };
    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action type: ${unexpectedAction}`);
  }
};

const initialState: CalculatorState = {
  result: 0,
  history: [],
};

const newState = calculatorState(initialState, {
  type: "add",
  value: 10,
  user: "Khizar",
  timestamps: Date.now(),
});

console.log(newState);
