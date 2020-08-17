/**
 * Created by Tatav on 28/05/2017.
 */
import React from 'react';

export default class Scene extends React.Component {
    componentDidMount() {
        let now = new Date();

        this.sky = this.refs.sky;
        this.sun_yellow = this.refs.sun_yellow;
        this.sun_red = this.refs.sun_red;
        this.clouds = this.refs.clouds;
        this.ground = this.refs.ground;
        this.night = this.refs.night;
        this.stars = this.refs.stars;
        this.sstar = this.refs.sstar;
        this.moon = this.refs.moon;

        this.sunset();
    }

    sunset() {
        $(this.sun_yellow).animate({'top':'96%','opacity':0.4}, 12000, () => {
            $(this.stars).animate({'opacity':1}, 5000, () => {
                $(this.moon).animate({'top':'30%','opacity':1}, 5000, () => {
                    $(this.sstar).animate({'opacity':1}, 300);
                    $(this.sstar).animate({'backgroundPosition':'0px 0px','top':'15%', 'opacity':0}, 500, () => {
                        this.sunrise();
                    });
                });
            });
        });
        $(this.sun_red).animate({'top':'96%','opacity':0.8}, 12000);
        $(this.sky).animate({'backgroundColor':'#4F0030'}, 18000);
        $(this.clouds).animate({'backgroundPosition':'1000px 0px','opacity':0}, 30000);
        $(this.night).animate({'opacity':0.8}, 20000);
    }

    sunrise() {
        $(this.moon).animate({'top':'96%','opacity':0}, 5000, () => {
            $(this.stars).animate({'opacity':0}, 5000, () => {
                $(this.sun_yellow).animate({'top':'30%','opacity':1}, 12000);
                $(this.sun_red).animate({'top':'96%','opacity':0}, 12000, () => {
                    this.sunset();
                });
            });
            $(this.sky).animate({'backgroundColor':'#FFFFFF'}, 17000);
            $(this.clouds).animate({'backgroundPosition':'1000px 0px','opacity':1}, 28000);
            $(this.night).animate({'opacity':0}, 12000);
        });
    }

    render() {
        return(
            <div>
                <div id="sky" ref="sky"></div>
                <div id="sun_yellow" ref="sun_yellow"></div>
                <div id="sun_red" ref="sun_red"></div>
                <div id="clouds" ref="clouds"></div>
                <div id="ground" ref="ground"></div>
                <div id="night" ref="night"></div>
                <div id="stars" ref="stars"></div>
                <div id="sstar" ref="sstar"></div>
                <div id="moon" ref="moon"></div>
            </div>
        );
    }
}