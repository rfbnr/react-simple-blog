import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "Home";
    }, [])

    return (
        <section className="section">
            <h1 className="section-title">Home</h1>
            <p className="section-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, vitae doloremque iste laborum pariatur consequuntur sunt voluptatem numquam maxime nostrum nobis sed beatae cum voluptates fuga quo eveniet tempora facere.</p>
        </section>
    )
}

export default Home;
