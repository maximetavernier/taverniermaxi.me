/**
 * Created by Tatav on 28/05/2017.
 */
import React from 'react';

import Suggestion from './SearchNavbar/Suggestions';

export default class SearchNavbar extends React.Component {
    constructor() {
        super();

        this.state = {
            tracklist: [],
            suggestions: []
        };
    }

    componentDidMount() {
        const { tracklist } = this.props;
        let array = [];

        this.searchContainer = this.refs.searchContainer;
        this.searchInput = this.refs.searchInput;
        this.mainContainer = document.querySelector('.header-search-navbar');
        this.mainList = document.querySelector('.tracklist_table');
        this.pendingList = document.querySelector('.pendinglist');

        for (let i = 0; i < 3; ++i)
            array.push(tracklist[Math.floor((Math.random() * tracklist.length) + 1)]);

        this.setState(() => ({
            tracklist: tracklist,
            suggestions: array
        }));

        this.init();
    }

    init() {
        this.searchInput.addEventListener('click', (ev) => {
            this.searchInput.focus();
        });
        document.addEventListener('keyup', (ev) => {
            // escape key.
            if( ev.keyCode == 27 ) {
                this.closeSearch();
            }
        });
    }

    openSearch() {
        this.mainContainer.classList.add('opaque');
        this.mainList.classList.add('transparent');
        this.pendingList.classList.add('transparent');
        this.searchContainer.classList.add('search-open');
        this.searchInput.focus();
    }

    closeSearch() {
        this.mainContainer.classList.remove('opaque');
        this.mainList.classList.remove('transparent');
        this.pendingList.classList.remove('transparent');
        this.searchContainer.classList.remove('search-open');
        this.searchInput.blur();
        this.searchInput.value = '';

        this.resetSuggestions();
    }

    resetSuggestions() {
        const { tracklist } = this.state;
        let array = [];

        for (let i = 0; i < 3; ++i)
            array.push(tracklist[Math.floor((Math.random() * tracklist.length) + 1)]);
        this.changeSuggestions(array);
    }

    onInputUpdate(e) {
        let value = e.target.value.toLowerCase();

        if (value.length > 0) {
            const { tracklist } = this.state;
            let array = [];

            tracklist.map((track) => {
                if (track.artist.toLowerCase().includes(value)
                    || track.song.toLowerCase().includes(value)
                    || track.category.toLowerCase().includes(value))
                    array.push(track);
            });
            this.changeSuggestions(array);
        } else this.resetSuggestions();
    }

    changeSuggestions(tracklist) {
        this.setState(() => ({
            suggestions: tracklist
        }));
    }

    addPending(track) {
        this.props.addPending(track);
    }

    render() {
        const { suggestions } = this.state;

        return (
            <nav className="search" ref="searchContainer">
                <button id="button-search-close" className="button-search-close" onClick={this.closeSearch.bind(this)} aria-label="Close search form">
                    <svg className="icon icon-cross">
                        <use xlinkHref="#icon-cross"></use>
                    </svg>
                </button>
                <form className="search-form" action="">
                    <input id="search-input" ref="searchInput" className="search-input" name="search" type="search" placeholder=""
                           autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                           onChange={this.onInputUpdate.bind(this)} onFocus={this.openSearch.bind(this)} />
                </form>
                <div className="search-suggestion">
                    <h3>Suggestions</h3>
                    <Suggestion tracks={this.state.suggestions} addPending={this.addPending.bind(this)} />
                </div>
            </nav>
        );
    }
}