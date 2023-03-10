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
            /**
             * Data to be searched
             * @type {string}
             */
            search: "",
            /**
             * The status returned from the request
             * @type {int}
             */
            status: 0,
            /**
             * The message that will be displayed to the user
             * @type {string}
             */
            message: "",
        };
    }
    /**
     * Retrieving the customers data set
     */
    getCustomers() {
        if (window.location.pathname.includes("Title")) {
            if (window.location.pathname.includes("ASC")) {
                fetch("/Customers/CustomersTitle/ASC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            } else {
                fetch("/Customers/CustomersTitle/DESC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            }
        } else if (window.location.pathname.includes("FirstName")) {
            if (window.location.pathname.includes("ASC")) {
                fetch("/Customers/CustomersFirstName/ASC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            } else {
                fetch("/Customers/CustomersFirstName/DESC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            }
        } else if (window.location.pathname.includes("MiddleName")) {
            if (window.location.pathname.includes("ASC")) {
                fetch("/Customers/CustomersMiddleName/ASC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            } else {
                fetch("/Customers/CustomersMiddleName/DESC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            }
        } else if (window.location.pathname.includes("LastName")) {
            if (window.location.pathname.includes("ASC")) {
                fetch("/Customers/CustomersLastName/ASC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            } else {
                fetch("/Customers/CustomersLastName/DESC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            }
        } else if (window.location.pathname.includes("MailAddress")) {
            if (window.location.pathname.includes("ASC")) {
                fetch("/Customers/CustomersMailAddress/ASC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            } else {
                fetch("/Customers/CustomersMailAddress/DESC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            }
        } else if (window.location.pathname.includes("Active")) {
            if (window.location.pathname.includes("ASC")) {
                fetch("/Customers/CustomersActive/ASC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            } else {
                fetch("/Customers/CustomersActive/DESC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            }
        } else if (window.location.pathname.includes("DateCreated")) {
            if (window.location.pathname.includes("ASC")) {
                fetch("/Customers/CustomersDateCreated/ASC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            } else {
                fetch("/Customers/CustomersDateCreated/DESC",
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => this.setState({
                        customers: data,
                    }));
            }
        } else if (window.location.pathname.includes("Search")) {
            fetch("/Customers/Search",
                {
                    method: "GET",
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    if (data.status != null && data.message != null) {
                        this.setState({
                            status: data.status,
                            message: data.message,
                        })
                    } else {
                        this.setState({
                            customers: data,
                        })
                    }
                });
        } else {
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
    }
    /**
     * Allowing the server to sort the data set before rendering
     * @returns {string}
     */
    handleTitleSort() {
        if (window.location.pathname.includes("Title=ASC")) {
            return "/Title=DESC";
        } else {
            return "/Title=ASC";
        }
    }
    /**
     * Allowing the server to sort the data set before rendering
     * @returns {string}
     */
    handleFirstNameSort() {
        if (window.location.pathname.includes("FirstName=ASC")) {
            return "/FirstName=DESC";
        } else {
            return "/FirstName=ASC";
        }
    }
    /**
     * Allowing the server to sort the data set before rendering
     * @returns {string}
     */
    handleMiddleNameSort() {
        if (window.location.pathname.includes("MiddleName=ASC")) {
            return "/MiddleName=DESC";
        } else {
            return "/MiddleName=ASC";
        }
    }
    /**
     * Allowing the server to sort the data set before rendering
     * @returns {string}
     */
    handleLastNameSort() {
        if (window.location.pathname.includes("LastName=ASC")) {
            return "/LastName=DESC";
        } else {
            return "/LastName=ASC";
        }
    }
    /**
     * Allowing the server to sort the data set before rendering
     * @returns {string}
     */
    handleEmailSort() {
        if (window.location.pathname.includes("MailAddress=ASC")) {
            return "/MailAddress=DESC";
        } else {
            return "/MailAddress=ASC";
        }
    }
    /**
     * Allowing the server to sort the data set before rendering
     * @returns {string}
     */
    handleActiveSort() {
        if (window.location.pathname.includes("Active=ASC")) {
            return "/Active=DESC";
        } else {
            return "/Active=ASC";
        }
    }
    /**
     * Allowing the server to sort the data set before rendering
     * @returns {string}
     */
    handleDateCreatedSort() {
        if (window.location.pathname.includes("DateCreated=ASC")) {
            return "/DateCreated=DESC";
        } else {
            return "/DateCreated=ASC";
        }
    }
    /**
     * Handling any change that is made in the user interface
     * @param {Event} event
     */
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }
    /**
     * Handling the data retrieved from the web server
     * @returns {Application}
     */
    handleCustomers() {
        if (this.state.customers.length == 0) {
            return (
                <div style={{ justifyContent: "center" }}>
                    <h1 style={{ color: this.handleResponseStatus() }}>{this.state.message}</h1>
                </div>
            );
        }
    }
    /**
     * Handling the status sent by the web server
     * @returns {string}
     */
    handleResponseStatus() {
        if (this.state.status == 0) {
            return "rgb(0%, 100%, 0%)";
        } else {
            return "rgb(100%, 0%, 0%)";
        }
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
        return (
            <header>
                <div>Customer</div>
                <div>
                    <a href="/Integer">Integer</a>
                </div>
                <div>
                    <a href="/String">String</a>
                </div>
            </header>
        );
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
                    <div>
                        <input type="search" name="search" placeholder="Search..." value={this.state.search} onChange={this.handleChange.bind(this)} required />
                        <a href={`/Search=${this.state.search}`} class="fa fa-search"></a>
                    </div>
                </header>
                <div>
                    <div>
                        <div>
                            <div>Title</div>
                            <div>
                                <a href={this.handleTitleSort()} class="fa fa-sort"></a>
                            </div>
                        </div>
                        <div>
                            <div>First Name</div>
                            <div>
                                <a href={this.handleFirstNameSort()} class="fa fa-sort"></a>
                            </div>
                        </div>
                        <div>
                            <div>Middle Name</div>
                            <div>
                                <a href={this.handleMiddleNameSort()} class="fa fa-sort"></a>
                            </div>
                        </div>
                        <div>
                            <div>Last Name</div>
                            <div>
                                <a href={this.handleLastNameSort()} class="fa fa-sort"></a>
                            </div>
                        </div>
                        <div>
                            <div>Email</div>
                            <div>
                                <a href={this.handleEmailSort()} class="fa fa-sort"></a>
                            </div>
                        </div>
                        <div>
                            <div>Active</div>
                            <div>
                                <a href={this.handleActiveSort()} class="fa fa-sort"></a>
                            </div>
                        </div>
                        <div>
                            <div>Date Created</div>
                            <div>
                                <a href={this.handleDateCreatedSort()} class="fa fa-sort"></a>
                            </div>
                        </div>
                    </div>
                    {this.handleCustomers()}
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
