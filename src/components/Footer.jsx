function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="text-center text-sm py-8">
                {currentYear} Nazariy Tivirikin
            </footer>
        </>
    );
}

export default Footer;