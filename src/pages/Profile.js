import { useEffect } from "react";

function Profile() {

    useEffect(() => {
        document.title = "Profile";
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Profile</h1>
            <p className="section-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum
                assumenda sit suscipit architecto dolorum impedit perspiciatis
                fugit eligendi magni deserunt fugiat sapiente, quaerat
                necessitatibus voluptates autem illo? Aliquam, blanditiis.
            </p>
        </section>
    );
}

export default Profile;
