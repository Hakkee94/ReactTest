import "./Header.scss";

function Header({ title }: { title: string }) {
    return (
        <header>
            <div>{title}</div>
        </header>
    );
}

export default Header;
