import { useEffect } from "react";

function NotFound() {
    useEffect(() => {
        document.title = "Not Found";
    }, [])

    return (
        <h1 className="heading-404">Halaman yang ingin di tampilkan tidak ada!!!</h1>
    )
}

export default NotFound;
