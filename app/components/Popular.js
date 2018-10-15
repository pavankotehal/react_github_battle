var React = require('react');
var propTypes = require('prop-types');

function SelectLanguage(props){
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return(
        <ul className='languages'>
        {languages.map(function(lang){
            console.log('down here', this);
            return (
                <li 
                style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
                onClick={props.onSelect.bind(null, lang)} 
                key={lang} >
                    {lang}
                </li>
            )
        })}
        </ul>
    )
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
        super(props);
        this.state = {
            selectedLanguage : 'All',
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang){
        this.setState(function(){
            return {
                selectedLanguage: lang,
            }
        });
    }

    render(){

        return (
            <div>
                <SelectLanguage 
                selectedLanguage = {this.state.selectedLanguage}
                onSelect = {this.updateLanguage}
                />
            </div>
        )
    }
}

module.exports = Popular;