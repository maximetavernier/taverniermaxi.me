/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

import SectionTitle from './Section/Title';
import Project from './Projects/Project';
import SectionModel from "@models/SectionModel";
import ProjectsSectionModel from "@models/Section/ProjectsSectionModel";
import ProjectModel from "@models/Section/Projects/ProjectModel";

const TiltFx = require('./Projects/tiltfx');

interface ProjectsSectionProps {
    key: number;
    data: SectionModel;
}

export default class ProjectsSection extends React.Component<ProjectsSectionProps, any> {
    constructor(props: ProjectsSectionProps) {
        super(props);

        this.state = {
            tiltSettings: [
                {},
                {
                    movement: {
                        imgWrapper : {
                            translation : {x: 10, y: 10, z: 30},
                            rotation : {x: 0, y: -10, z: 0},
                            reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                        },
                        lines : {
                            translation : {x: 10, y: 10, z: [0,70]},
                            rotation : {x: 0, y: 0, z: -2},
                            reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
                        },
                        caption : {
                            rotation : {x: 0, y: 0, z: 2},
                            reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                        },
                        overlay : {
                            translation : {x: 10, y: -10, z: 0},
                            rotation : {x: 0, y: 0, z: 2},
                            reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
                        },
                        shine : {
                            translation : {x: 100, y: 100, z: 0},
                            reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                        }
                    }
                },
                {
                    movement: {
                        imgWrapper : {
                            rotation : {x: -5, y: 10, z: 0},
                            reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
                        },
                        caption : {
                            translation : {x: 30, y: 30, z: [0,40]},
                            rotation : {x: [0,15], y: 0, z: 0},
                            reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
                        },
                        overlay : {
                            translation : {x: 10, y: 10, z: [0,20]},
                            reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
                        },
                        shine : {
                            translation : {x: 100, y: 100, z: 0},
                            reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
                        }
                    }
                },
                {
                    movement: {
                        imgWrapper : {
                            rotation : {x: -5, y: 10, z: 0},
                            reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
                        },
                        caption : {
                            translation : {x: 20, y: 20, z: 0},
                            reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                        },
                        overlay : {
                            translation : {x: 5, y: -5, z: 0},
                            rotation : {x: 0, y: 0, z: 6},
                            reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
                        },
                        shine : {
                            translation : {x: 50, y: 50, z: 0},
                            reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
                        }
                    }
                },
                {
                    movement: {
                        imgWrapper : {
                            translation : {x: 0, y: -8, z: 0},
                            rotation : {x: 3, y: 3, z: 0},
                            reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
                        },
                        lines : {
                            translation : {x: 15, y: 15, z: [0,15]},
                            reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
                        },
                        overlay : {
                            translation : {x: 0, y: 8, z: 0},
                            reverseAnimation : {duration : 600, easing : 'easeOutExpo'}
                        },
                        caption : {
                            translation : {x: 10, y: -15, z: 0},
                            reverseAnimation : {duration : 900, easing : 'easeOutExpo'}
                        },
                        shine : {
                            translation : {x: 50, y: 50, z: 0},
                            reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
                        }
                    }
                },
                {
                    movement: {
                        lines : {
                            translation : {x: -5, y: 5, z: 0},
                            reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
                        },
                        caption : {
                            translation : {x: 15, y: 15, z: 0},
                            rotation : {x: 0, y: 0, z: 3},
                            reverseAnimation : {duration : 1500, easing : 'easeOutElastic', elasticity : 700}
                        },
                        overlay : {
                            translation : {x: 15, y: -15, z: 0},
                            reverseAnimation : {duration : 500,easing : 'easeOutExpo'}
                        },
                        shine : {
                            translation : {x: 50, y: 50, z: 0},
                            reverseAnimation : {duration : 500, easing : 'easeOutExpo'}
                        }
                    }
                },
                {
                    movement: {
                        imgWrapper : {
                            translation : {x: 5, y: 5, z: 0},
                            reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
                        },
                        caption : {
                            translation : {x: 10, y: 10, z: [0,50]},
                            reverseAnimation : {duration : 1000, easing : 'easeOutQuart'}
                        },
                        shine : {
                            translation : {x: 50, y: 50, z: 0},
                            reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
                        }
                    }
                },
                {
                    movement: {
                        lines : {
                            translation : {x: 40, y: 40, z: 0},
                            reverseAnimation : {duration : 1500, easing : 'easeOutElastic'}
                        },
                        caption : {
                            translation : {x: 20, y: 20, z: 0},
                            rotation : {x: 0, y: 0, z: -5},
                            reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
                        },
                        overlay : {
                            translation : {x: -30, y: -30, z: 0},
                            rotation : {x: 0, y: 0, z: 3},
                            reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
                        },
                        shine : {
                            translation : {x: 100, y: 100, z: 0},
                            reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
                        }
                    }
                }
            ]
        }
    }

    componentDidMount() {
        const { tiltSettings } = this.state;
        let idx = 0;

        [].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) {
            idx = pos % 2 === 0 ? idx + 1 : idx;
            new TiltFx(el, tiltSettings[idx - 1]);
        });
    }

    render() {
        const { data } = this.props;
        const { projects, tooltip } = data as ProjectsSectionModel;

        return (
            <div className="container">
                <SectionTitle label={data.title}/>
                <section className="row">
                    {projects.map((project: ProjectModel, key: number) =>
                        <Project key={key} project={project} tooltip={tooltip} />
                    )}
                </section>
            </div>
        );
    }
}