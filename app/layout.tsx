import '../styles/globals.css';
import Headerr from '../components/Headerr';
import Footer from '../components/Footer';
import Pagina from '../components/Pagina';
import Lista from '../components/Lista';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head></head>
            <body>
            
                <Headerr />
                {children}
               
            </body>
            <Footer />
        </html>
    );
}
