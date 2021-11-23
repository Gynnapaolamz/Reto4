namespace WebApplication1.Models
{
    public class Plato
    {
       

        public int id { get; set; }
        public string nombre { get; set; }
        public string imagen { get; set; }
        public string descripcion { get; set; }
        public int precio { get; set; }
        public int Restaurante_Id { get; set; }
    }
}
