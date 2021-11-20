

namespace WebApplication1.Models
{
    public class Empleado
    {
        internal object id;
        internal object nombre;
        internal object imagen;
        internal object descripcion;

        public int Id { get; set; }
        public string Name { get; set; }
        public string Imagen { get; set; }
        public string Descripcion { get; set; }
        public int Restaurante_Id { get; set; }
    }
}
