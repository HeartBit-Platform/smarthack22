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
            <body>
            
                <Headerr />
                {children}
                <Footer />
            </body>
        </html>
    );
}
