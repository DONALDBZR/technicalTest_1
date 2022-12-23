/**
 * The Application that is going to be rendered in the DOM
 */
class Application extends React.Component {
    constructor(props) {
        super(props);
        /**
         * States of the properties of the application
         */
        this.state = {
            /**
             * customers
             * @type {array}
             */
            customers: [],
        };
    }
    /**
     * Retrieving the customers data set
     */
    getCustomers() {
        fetch("/Customers",
            {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then((data) => this.setState({
                customers: data,
            }));
    }
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
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.getCustomers();
    }
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
                    {this.state.customers.map((customer) => {
                        return (
                            <div>
                                <div>{customer.title}</div>
                                <div>{customer.firstName}</div>
                                <div>{customer.middleName}</div>
                                <div>{customer.lastName}</div>
                                <div>
                                    <a href={`mailto:${customer.mailAddress}`}>{customer.mailAddress}</a>
                                </div>
                                <div>{customer.active}</div>
                                <div>{customer.dateCreated}</div>
                            </div>
                        )
                    })}
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
