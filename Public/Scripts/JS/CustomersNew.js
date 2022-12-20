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
                    <div>Create</div>
                    <div>Add new customer</div>
                </header>
                <form method="POST">
                    <div>
                        <div>Title</div>
                        <div>
                            <input type="text" name="title" required />
                        </div>
                    </div>
                    <div>
                        <div>First Name</div>
                        <div>
                            <input type="text" name="firstName" required />
                        </div>
                    </div>
                    <div>
                        <div>Middle Name</div>
                        <div>
                            <input type="text" name="middleName" required />
                        </div>
                    </div>
                    <div>
                        <div>Last Name</div>
                        <div>
                            <input type="text" name="lastName" required />
                        </div>
                    </div>
                    <div>
                        <div>Email</div>
                        <div>
                            <input type="email" name="email" required />
                        </div>
                    </div>
                    <div>
                        <div>Active</div>
                        <div>
                            <div>
                                <input type="radio" name="active" value="0" required />
                                <label for="0">False</label>
                            </div>
                            <div>
                                <input type="radio" name="active" value="1" required />
                                <label for="1">True</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>
                <div>
                    <a href="/">Back to List</a>
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
