/**
 * The Application that is going to be rendered in the DOM
 */
class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /**
             * Title of the customer
             * @type {string}
             */
            title: "",
            /**
             * First name of the customer
             * @type {string}
             */
            firstName: "",
            /**
             * Last name of the customer
             * @type {string}
             */
            lastName: "",
            /**
             * Middle Name of the customer
             * @type {string}
             */
            middleName: "",
            /**
             * Mail Address of the customer
             * @type {string}
             */
            mailAddress: "",
            /**
             * Activation status of the customer
             * @type {int}
             */
            active: 0,
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
            /**
             * The url to be redirected after displaying the message
             * @type {string}
             */
            url: "",
        };
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
     * Handling the form submission
     * @param {Event} event
     */
    handleSubmit(event) {
        const delay = 3600000;
        event.preventDefault();
        fetch("/Customers/Create", {
            method: "POST",
            body: JSON.stringify({
                title: this.state.title,
                firstName: this.state.firstName,
                middleName: this.state.middleName,
                lastName: this.state.lastName,
                mailAddress: this.state.mailAddress,
                active: this.state.active,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    status: data.status,
                    message: data.message,
                    url: data.url,
                })
            )
            .then(() => this.redirector(delay));
    }
    /**
     * Redirecting the user to an intended url
     * @param {int} delay
     */
    redirector(delay) {
        setTimeout(() => {
            window.location.href = this.state.url;
        }, delay);
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
    render() {
        return (
            <main>
                <header>
                    <div>Create</div>
                    <div>Add new customer</div>
                </header>
                <form method="POST" onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <div>Title</div>
                        <div>
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>
                    <div>
                        <div>First Name</div>
                        <div>
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange.bind(this)} required />
                        </div>
                    </div>
                    <div>
                        <div>Middle Name</div>
                        <div>
                            <input type="text" name="middleName" value={this.state.middleName} onChange={this.handleChange.bind(this)} required />
                        </div>
                    </div>
                    <div>
                        <div>Last Name</div>
                        <div>
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>
                    <div>
                        <div>Email</div>
                        <div>
                            <input type="email" name="mailAddress" value={this.state.mailAddress} onChange={this.handleChange.bind(this)} required />
                        </div>
                    </div>
                    <div>
                        <div>Active</div>
                        <div>
                            <div>
                                <input type="radio" name="active" value="0" checked={this.state.active == 0} onChange={this.handleChange.bind(this)} required />
                                <label for="0">False</label>
                            </div>
                            <div>
                                <input type="radio" name="active" value="1" checked={this.state.active == 1} onChange={this.handleChange.bind(this)} required />
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
