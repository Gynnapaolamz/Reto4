

namespace WebApplication1.Models
{
    public class Empleado
    {
        internal object id;
        internal object comentario;
        internal object clienteId;

        public int Id { get; set; }
        public string Comentario { get; set; }
        public int Cliente_Id { get; set; }

    }
}
