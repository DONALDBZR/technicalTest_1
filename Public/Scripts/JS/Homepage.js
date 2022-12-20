/**
 * The Application that is going to be rendered in the DOM
 */
class Application extends React.Component {
    /**
     * Renders the components that are being returned
     * @returns {Application} Component
     */
    render() {
        return [<Header />, <Main />, <Footer />];
    }
}
/**
 * The component that is the header
 */
class Header extends Application {
    render() {
        return <header>Customer Application</header>;
    }
}
/**
 * The component that is the main
 */
class Main extends Application {
    render() {
        return (
            <main>
                <header>
                    <div>Home</div>
                    <div>
                        <a href="/Customers/New">Create New</a>
                    </div>
                </header>
                <div>
                    <div>
                        <div>Title</div>
                        <div>First Name</div>
                        <div>Middle Name</div>
                        <div>Last Name</div>
                        <div>Email</div>
                        <div>Active</div>
                        <div>Date Created</div>
                    </div>
                </div>
            </main>
        );
    }
}
/**
 * The component that is the footer
 */
class Footer extends Application {
    render() {
        return <footer>Application</footer>;
    }
}
// Rendering the page
ReactDOM.render(<Application />, document.body);
