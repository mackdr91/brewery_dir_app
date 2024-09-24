const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-slate-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {year} Brews. All rights reserved.</p>
            </div>
        </footer>
     );
}

export default Footer;