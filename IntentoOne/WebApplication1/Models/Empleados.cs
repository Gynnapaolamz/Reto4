

namespace WebApplication1.Models
{
    public class Empleado
    {
        //internal object id;
        //internal object nombre;
        //internal object imagen;
        //internal object descripcion;

        public int id { get; set; }
        public string nombre { get; set; }
        public string imagen { get; set; }
        public string ocupacion { get; set; }
        public int Restaurante_Id { get; set; }
    }
}
