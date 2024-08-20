import { neon } from "@neondatabase/serverless";

export async function permaneciaLogin() {
  let dataEstadoUsuario = "";
  if (typeof window !== "undefined") {
    dataEstadoUsuario = localStorage.getItem("dadosInforEstadoUsuario");
    console.log(dataEstadoUsuario);

    if (dataEstadoUsuario) {
      const sql = neon(
        "postgres://default:DEsoX6JqN1AM@ep-green-silence-a4qtd6to-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15",
      );
      const query =
        await sql`SELECT usuarioEstaCadastrado FROM usuarios WHERE usuarioEstaCadastrado IS NOT NULL`;

      query.forEach((objeto) => {
        const queryUsuarioEstaCadastrado = objeto.usuarioEstaCadastrado;

        if (queryUsuarioEstaCadastrado) {
          if (typeof window !== "undefined") {
            localStorage.setItem("dadosInforEstadoUsuario", "Cradrastrado");
          }
        }
      });
    }
  }

  let dataNome = " ";
  if (typeof window !== "undefined") {
    dataNome = localStorage.getItem("dadosInformacoesqualNome");
    console.log(dataNome);

    if (dataNome === false) {
      const sql = neon(
        "postgres://default:DEsoX6JqN1AM@ep-green-silence-a4qtd6to-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15",
      );
      const query = await sql`SELECT nome FROM usuarios WHERE nome IS NOT NULL`;

      query.forEach((objeto) => {
        const queryNome = objeto.nome;

        if (queryNome) {
          if (typeof window !== "undefined") {
            localStorage.setItem("dadosInformacoesqualNome", queryNome);
          }
        }
      });
    }
  }

  console.log("dataEstadoUsuario: ", dataEstadoUsuario, "dataNome: ", dataNome);

  return { estadoUsuario: dataEstadoUsuario, Nome: dataNome };
}
