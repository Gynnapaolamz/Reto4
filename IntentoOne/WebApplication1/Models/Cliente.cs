

namespace WebApplication1.Models
{
    public class Empleado
    {
        internal object id;
        internal object nombre;
        internal object nombreusuario;
        internal object descripcion;
        internal object password;

        public int Id { get; set; }
        public string Name { get; set; }
        public string Nombreusuario { get; set; }
        public string Descripcion { get; set; }
        public string Password { get; set; }

    }
}
