const initialState = {
  qualEstadoUsuario: false,
  estaValidadoCampos: false,
  qualNomeUsuario: " ",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUAL_ESTADO_USUARIO":
      return { ...state, qualEstadoUsuario: action.payload };
    // Adicione mais casos conforme necessário
    case "SET_ESTA_VALIDADO_CAMPOS":
      return { ...state, estaValidadoCampos: action.payload };
    case "SET_QUAL_NOME_USUARIO":
      return { ...state, qualNomeUsuario: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
