var React = require('react');
var propTypes = require('prop-types');
var api = require('../utils/api');

function SelectLanguage (props) {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className='languages'>
        {languages.map(function (lang) {
          return (
            <li
              style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
              onClick={props.onSelect.bind(null, lang)}
              key={lang}>
                {lang}
            </li>
          )
        })}
      </ul>
    )
  }
  

// repo grid
function RepoGrid(props){
    return (
        <ul className="popular-list">
        {props.repos.map(function(repo, index){
            return (
                <li key={repo.name} className='popular-item'></li>
            )
        })}
        </ul>
    )
};

RepoGrid.propTypes = {
    repos: propTypes.array.isRequired,
  }

/*
class SelectLanguage extends React.Component{
    render(){
        return(
            <ul className='languages'>
            {languages.map(function(lang){
                console.log('down here', this);
                return (
                    <li 
                    style={lang === this.props.selectedLanguage ? {color: '#d0021b'} : null}
                    onClick={this.props.onSelect.bind(null, lang)} 
                    key={lang} >
                        {lang}
                    </li>
                )
            }, this)}
            </ul>
        )
    }
}
*/


SelectLanguage.propTypes = {
    selectedLanguage: propTypes.string.isRequired,
    onSelect : propTypes.func.isRequired,
}

class Popular extends React.Component{
    constructor(props){
        super();
        this.state = {
            selectedLanguage : 'All',
            repos : null,
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount(){
        // AJAX request
        this.updateLanguage(this.state.selectedLanguage);
    };

    updateLanguage(lang){
        this.setState(function(){
            return {
                selectedLanguage: lang,
                repos: null
            }
        });

        api.fetchPopularRepos(lang)
        .then(function(repos){
            console.log("Before API call")
            console.log(repos);
            this.setState(function(){
                return {
                    repos: repos
                }
            });
        }.bind(this));
    }
    render(){
        return (
            <div>
                <SelectLanguage 
                selectedLanguage = {this.state.selectedLanguage}
                onSelect = {this.updateLanguage}
                />
                {!this.state.repos ? <p>Loading...!</p>
                :<RepoGrid repos={this.state.repos} />}
            </div>
        )
    }
}

module.exports = Popular;