
var QuoteApi = React.createClass({

    getInitialState: function () {
        return {
            quote: "",
            author: ""
        };
    },

    componentWillMount: function () {
        $.ajax({
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
            dataType: 'json',
            method: 'POST',
            headers: {
                'X-Mashape-Key': '#'
            },
            cache: false,
            success: function (data) {
                this.setState({
                    quote: data.quote,
                    author: data.author
                });
            }.bind(this),
            error: function (xhr, status, err) {
                this.setState({
                    error: err,
                    status: status
                });
            }.bind(this)
        });
    },

    render: function () {

        return (
            <div>
                <center><h3>{this.state.quote}</h3></center><br />
                <p className="source-text"><strong>Movie: </strong> {this.state.author}</p>
            </div >
        );
    }
});
ReactDOM.render(
    <QuoteApi />,
    document.getElementById('app')
);
