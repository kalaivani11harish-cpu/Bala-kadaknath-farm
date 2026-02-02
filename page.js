const farmOpen = true; // change to false to close orders

const products = [
  {
    name: "Kadaknath Black Chick",
    age: "1 Day",
    price: 38,
    min: 100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUROt4_QYDNa_rTHnq7PYDUd3Z3_ft0i_Hn7wUQ3mUHw&s",
  },
  {
    name: "Kadaknath Black Chick",
    age: "1 Month",
    price: 110,
    min: 20,
    image: "https://tiimg.tistatic.com/fp/1/007/820/female-one-month-original-kadaknath-chick-147.jpg",
  },
  {
    name: "Sonali Farm Chick",
    age: "1 Day",
    price: 33,
    min: 100,
    image: "https://tiimg.tistatic.com/fp/1/007/484/2-kg-sonali-healthy-natural-vaccinated-black-yellow-poultry-farm-chicks--573.jpg",
  },
  {
    name: "Sonali Farm Chick",
    age: "1 Month",
    price: 90,
    min: 100,
    image: "https://i.ytimg.com/vi/qQcjMOyInbw/sddefault.jpg",
  },
  {
    name: "Aseel Cross Big Breed",
    age: "1 Day",
    price: 41,
    min: 100,
    image: "https://5.imimg.com/data5/ANDROID/Default/2020/9/PG/EN/YC/36227209/product-jpeg-500x500.jpeg",
  },
  {
    name: "Aseel Cross Big Breed",
    age: "1 Month",
    price: 100,
    min: 100,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/3/KV/BV/BF/122657967/500-aseel-cross-chicks-1-month-.JPG",
  },
  {
    name: "Small Native Chick",
    age: "1 Day",
    price: 65,
    min: "70+",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KzyKEEE8UPj8MHIMkQVFXwUU8jDx7H70dHquHVLSyfQ9Jq4scVTTMbQ&s",
  },
];

export default function Home() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
  <img 
    src="https://yt3.googleusercontent.com/X-wsP7E5jMxNqSt0tq3QUaJduY6NQn13--tPvmef5MkNWT7XdAizkGYbCWcKu4SQ7DM6CO9SGA=s160-c-k-c0x00ffffff-no-rj" 
    alt="Balak Kadaknath Farm Logo" 
    style={styles.logo} 
  />
  <h1> Balak Kadaknath Farm </h1>
  <p>Salem District | Trusted Poultry Farm</p>
</header>

      <section style={styles.status}>
        <h3>📢 Farm Status</h3>
        {farmOpen ? (
          <p style={{ color: "green", fontWeight: "bold" }}>🟢 Orders Open</p>
        ) : (
          <p style={{ color: "red", fontWeight: "bold" }}>🔴 Orders Closed</p>
        )}
      </section>

      <section style={styles.section}>
        <h2>🛒 Product Details</h2>

        <div style={styles.products}>
          {products.map((p, i) => (
            <div key={i} style={styles.card}>
              <img src={p.image} style={styles.image} />
              <h3>{p.name}</h3>
              <p><b>Age:</b> {p.age}</p>
              <p><b>Price:</b> ₹{p.price}</p>
              <p><b>Minimum Order:</b> {p.min}</p>

              {farmOpen && (
                <a
                  href={`https://wa.me/919566815797?text=I want to order ${p.name} (${p.age})`}
                  target="_blank"
                  style={styles.btn}
                >
                  📲 Order on WhatsApp
                </a>
              )}
            </div>
          ))}
        </div>
         {/* Delivery */}
      <section style={styles.section}>
        <h2>🚚 Delivery Information</h2>
        <ul>
          <li>Bus & Train delivery across Tamil Nadu</li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bplhr91_oGYLyMnj0RySxE-MJD0XExFDxw&s"></img>
          <li>Orders above 1000 birds → Truck home delivery</li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJF9Sv2Uxbbx4GeSnfXZi5t__ux91-eHfQrtKLI45qCg&s"></img>
          <li>Farm visit & direct purchase available(call and come)
           
          </li>

        </ul>
      </section>
      {/* YouTube Channel */}
<section style={styles.section}>
  <h2>▶️ Our YouTube Channel</h2>
  <p>Watch farm updates, chick growth & delivery videos</p>

  <a
    href="https://www.youtube.com/@balakadaknathfarm8535"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.youtubeBtn}
  >
    🔔 Visit Our YouTube Channel
  </a>
</section>

      </section>

      <footer style={styles.footer}>
        © 2026 Balak Kadaknath Farm 
      </footer>
    </div>
  );
}

const styles = {
  page: { fontFamily: "Arial", background: "#f4fff4" },
  header: { background: "#1b5e20", color: "white", padding: 30, textAlign: "center" },
  section: { padding: 30,color:"black" },
  products: { display: "flex", gap: 20, flexWrap: "wrap",color:"black" },
  card: {
    background: "white",
    padding: 15,
    borderRadius: 10,
    width: 260,
    boxShadow: "0 4px 8px rgba(0,0,0,.1)",
    color:"black",
  },
  image: { width: "100%", borderRadius: 10 },
  btn: {
    display: "block",
    marginTop: 10,
    padding: 10,
    background: "#25D366",
    color: "white",
    textAlign: "center",
    borderRadius: 6,
    textDecoration: "none",
    fontWeight: "bold",
  },
  status: { textAlign: "center", padding: 20 },
  footer: { background: "#1b5e20", color: "white", padding: 15, textAlign: "center" },
  youtubeBtn: {
  display: "inline-block",
  marginTop: 10,
  padding: "12px 20px",
  background: "#FF0000",
  color: "white",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: "bold",
},
logo: {
  width: 80,          // size of the logo
  height: 80,
  borderRadius: 10,   // optional rounded corners
  marginBottom: 10,
},
};