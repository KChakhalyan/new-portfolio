const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-black text-white text-center py-6 px-4">
            <p className="text-sm">
                &copy; {year} Karen Chakhalyan. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
