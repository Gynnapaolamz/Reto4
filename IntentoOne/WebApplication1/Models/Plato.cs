namespace WebApplication1.Models
{
    public class Plato
    {
        internal object id;
        internal object nombre;
        internal object descripcion;
        internal object precio;
        internal object imagen;
        internal object restaurante_Id;

        public int Id { get; set; }
        public string Name { get; set; }
        public string Imagen { get; set; }
        public string Descripcion { get; set; }
        public int Precio { get; set; }
        public int Restaurante_Id { get; set; }
    }
}
