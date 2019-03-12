module.exports = {
  title: 'Maxime Tavernier - Online Portfolio',
  sections: [
    {
      title: 'About me',
      className: 'about',
      sectionColor: '#3E4651',
      info: {
        firstname: 'Maxime',
        lastname: 'Tavernier',
        asset: 'assets/me.jpg',
        title: 'Online Portfolio',
        subtitle: [
          'Full-time developer,',
          'Artist the rest of the time.'
        ],
        descr: [
          'Mastered IT Engineer',
          'Web & mobile passionate'
        ],
        seemore: 'See more'
      }
    },
    {
      title: 'Studies & Experiences',
      className: 'exps',
      sectionColor: '#2980B9',
      studiesTitle: 'Studies',
      internshipsTitle: 'Internships',
      exps: [
        {
          start: '2011',
          end: '2012',
          type: 'study',
          title: 'ESIEE (Noisy-le-Grand, France)',
          url: 'http://www.esiee.fr/',
          subtitle: 'École Supérieure d\'Ingénieurs en Électronique et Électrotechnique',
          descr: 'Engineering cycle - 1st year',
          asset: 'assets/esiee.png'
        },
        {
          start: '2012',
          end: '2016',
          type: 'study',
          title: 'EPITA (Kremlin-Bicêtre, France)',
          url: 'http://www.epita.fr/',
          subtitle: 'École Pour l’Informatique et les Techniques Avancées',
          descr: 'Master - MIT major (Multimédia & Information Technologies)',
          asset: 'assets/epita.png'
        },
        {
          start: 'Jun. 2009',
          end: 'Jul. 2009',
          type: 'internship',
          title: 'NRG Telecom (Plymouth, England)',
          url: 'http://www.nrgtelecom.co.uk/',
          subtitle: 'Website creation and management',
          descr: 'Web development under the CMS \'Joomla\' (HTML/CSS)',
          asset: 'assets/nrgtelecom.png'
        },
        {
          start: 'Oct. 2014',
          end: 'Dec. 2014',
          type: 'internship',
          title: 'Wakanim (Roubaix, France)',
          url: 'https://www.wakanim.tv/fr/v2',
          subtitle: 'Japanese animation broadcast service',
          descr: 'Web integration in ASP.NET under the CMS \'MonoX\' (C#, HTML5/CSS3, T-SQL)',
          asset: 'assets/wakanim.png'
        },
        {
          start: 'May 2016',
          end: 'Nov. 2016',
          type: 'internship',
          title: 'Gatewang (Guangzhou, China)',
          url: 'http://www.bitgaiwang.com/',
          subtitle: 'E-commerce platform & O2O business',
          descr: 'Web integration in backend. Security and functionnal Testing (C#, HTML5/CSS3, T-SQL)',
          asset: 'assets/gatewang.png'
        }
      ]
    },
    {
      title: 'Technologies',
      className: 'technos',
      sectionColor: '#37BC9B',
      groups: [
        {
          title: 'Front-end',
          list: [
            {
              name: 'HTML 5',
              icon: 'html5',
              facts: [

              ],
              level: 4
            },
            {
              name: 'CSS 3',
              icon: 'css3',
              facts: [

              ],
              level: 3.5
            },
            {
              name: 'jQuery',
              icon: 'jquery',
              facts: [

              ],
              level: 3
            },
            {
              name: 'React',
              icon: 'react',
              facts: [

              ],
              level: 2
            }
          ]
        },
        {
          title: 'Back-end',
          list: [
            {
              name: 'Java/JEE',
              icon: 'java',
              facts: [

              ],
              level: 3.5
            },
            {
              name: 'Vert.x',
              icon: 'vertx',
              facts: [

              ],
              level: 4
            },
            {
              name: '.NET',
              icon: 'dotnet',
              facts: [

              ],
              level: 4
            }
          ]
        },
        {
          title: 'Mobile - Android',
          list: [
            {
              name: 'Material Design',
              icon: 'materiald',
              facts: [

              ],
              level: 3
            },
            {
              name: 'RxJava',
              icon: 'rxjava',
              facts: [

              ],
              level: 4
            },
            {
              name: 'Retrofit',
              icon: 'retrofit',
              facts: [

              ],
              level: 4
            },
            {
              name: 'Gradle',
              icon: 'gradle',
              facts: [

              ],
              level: 3
            }
          ]
        },
        {
          title: 'Databases',
          list: [
            {
              name: 'MySQL',
              icon: 'mysql',
              facts: [

              ],
              level: 4
            },
            {
              name: 'SQL Server',
              icon: 'msql_server',
              facts: [

              ],
              level: 3.5
            },
            {
              name: 'Neo4j',
              icon: 'neo4j',
              facts: [

              ],
              level: 3
            },
            {
              name: 'Memcached',
              icon: 'memcached',
              facts: [

              ],
              level: 2
            }
          ]
        },
        {
          title: 'Server deployement',
          list: [
            {
              name: 'Linux',
              icon: 'linux',
              facts: [

              ],
              level: 3.5
            },
            {
              name: 'Vagrant',
              icon: 'vagrant',
              facts: [

              ],
              level: 3.5
            },
            {
              name: 'Ansible',
              icon: 'ansible',
              facts: [

              ],
              level: 3.5
            },
            {
              name: 'Shell script',
              icon: 'terminal',
              facts: [

              ],
              level: 4
            }
          ]
        },
        {
          title: 'Development tools',
          list: [
            {
              name: 'JetBrains suite',
              icon: 'jetbrains',
              facts: [

              ],
              level: 4.5
            },
            {
              name: 'Android Studio',
              icon: 'androidstudio',
              facts: [

              ],
              level: 4.5
            },
            {
              name: 'Visual Studio',
              icon: 'vs',
              facts: [

              ],
              level: 4
            },
            {
              name: 'Git',
              icon: 'git',
              facts: [

              ],
              level: 4
            }
          ]
        }
      ]
    },
    {
      title: 'Closed projects',
      className: 'projects',
      sectionColor: '#34495E',
      tooltip: 'Discover me',
      projects: [
        {
          title: 'YakaLfer',
          descr: 'Resource management intranet',
          asset: 'assets/yakalfer/logo.jpg',
          technosicon: [
            'java',
            'mysql',
            'jquery'
          ],
          gallery: [
            {
              src: 'assets/yakalfer/logo.jpg',
              caption: 'Logo'
            },
            {
              src: 'assets/yakalfer/01.jpg',
              caption: 'Client list view example, with a useful side bar to navigate quickly'
            },
            {
              src: 'assets/yakalfer/02.jpg',
              caption: 'Example of a route as seen by a truck driver'
            },
            {
              src: 'assets/yakalfer/03.jpg',
              caption: 'Bills view as seen by a client'
            }
          ]
        },
        {
          title: 'FitIn',
          descr: 'Platform for tips exchange',
          asset: 'assets/fitin/logo.jpg',
          technosicon: [
            'android'
          ],
          gallery: [
            {
              src: 'assets/fitin/logo.jpg',
              caption: 'Logo'
            },
            {
              src: 'assets/fitin/01.jpg',
              caption: 'Choice of interests'
            },
            {
              src: 'assets/fitin/02.jpg',
              caption: 'List of nearby activities'
            },
            {
              src: 'assets/fitin/03.jpg',
              caption: 'Description of an apartment'
            }
          ]
        },
        {
          title: 'Musa',
          descr: 'Musical universe social network',
          asset: 'assets/musa/logo.jpg',
          technosicon: [
            'android',
            'vertx',
            'mysql',
            'neo4j'
          ],
          gallery: [
            {
              src: 'assets/musa/logo.jpg',
              caption: 'Logo'
            },
            {
              src: 'assets/musa/01.png',
              caption: 'News'
            },
            {
              src: 'assets/musa/02.png',
              caption: 'Navigation panel'
            },
            {
              src: 'assets/musa/03.png',
              caption: 'Audio player'
            }
          ]
        },
        {
          title: 'Youcast',
          descr: 'Video broadcasting service, Youtube like',
          asset: 'assets/youcast/logo.jpg',
          technosicon: [
            'android',
            'retrofit',
            'rxjava',
            'materiald'
          ],
          gallery: [
            {
              src: 'assets/youcast/logo.jpg',
              caption: 'Logo'
            },
            {
              src: 'assets/youcast/01.png',
              caption: 'List of videos available from the service'
            },
            {
              src: 'assets/youcast/02.png',
              caption: 'Filtering by name'
            },
            {
              src: 'assets/youcast_03.png',
              caption: 'Description of a video in a portrait layout...'
            },
            {
              src: 'assets/youcast/04.png',
              caption: '... or a landscape layout'
            },
            {
              src: 'assets/youcast/05.png',
              caption: 'Viewing video'
            }
          ]
        }
      ]
    },
    {
      title: 'Passions',
      className: 'passions',
      sectionColor: '#977BAB',
      passions: [
        {
          title: 'Music',
          icon: 'music',
          content: [
            {
              src: 'assets/music/pcaif1.jpg',
              short: 'Singer',
              caption: 'Les petits chanteurs d\'Asnières - 1999'
            },
            {
              src: 'assets/music/pcaif2.jpg',
              short: 'Pianist',
              caption: 'Les petits chanteurs d\'Asnières - 2013'
            },
            {
              src: 'assets/music/pcaif3.jpg',
              short: 'Singer',
              caption: 'Les petits chanteurs d\'Asnières - 2014'
            },
            {
              src: 'assets/music/pcaif4.jpg',
              short: 'Singer',
              caption: 'Les petits chanteurs d\'Asnières - 2014'
            },
            {
              src: 'assets/music/sono.png',
              short: 'Soundman',
              caption: 'Installation & mixing for some concerts'
            }
          ]
        },
        {
          title: 'Photography',
          icon: 'photo',
          content: [
            {
              src: 'assets/photo/instagram01.jpg',
              short: '',
              caption: 'From Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram02.jpg',
              short: '',
              caption: 'From Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram03.jpg',
              short: '',
              caption: 'From Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram04.jpg',
              short: '',
              caption: 'From Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram05.jpg',
              short: '',
              caption: 'From Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram06.jpg',
              short: '',
              caption: 'From Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram07.jpg',
              short: '',
              caption: 'From Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram08.jpg',
              short: '',
              caption: 'From Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram09.jpg',
              short: '',
              caption: 'From Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/montmartre.jpg',
              short: '',
              caption: 'Butte Montmartre - Paris'
            }
          ]
        },
        {
          title: 'Traveling',
          icon: 'plane',
          content: [
            {
              src: 'assets/travel/berlin.jpg',
              short: 'Germany',
              caption: 'Berlin Wall - Berlin, Germany'
            },
            {
              src: 'assets/travel/guangzhou.jpg',
              short: 'China',
              caption: 'Canton\'s Tower - Guangzhou, China'
            },
            {
              src: 'assets/travel/hongkong.jpg',
              short: 'Hong Kong',
              caption: 'Mong Kok - Hong Kong'
            },
            {
              src: 'assets/travel/annecy.jpg',
              short: 'Annecy',
              caption: 'Annecy lake - Annecy, France'
            },
            {
              src: 'assets/travel/singapore.jpg',
              short: 'Singapore',
              caption: 'Marina Bay & Garden by the bay - Singapore'
            },
            {
              src: 'assets/travel/siemreap.jpg',
              short: 'Cambodia',
              caption: 'Angkor Wat - Siem Reap, Cambodia'
            },
            {
              src: 'assets/travel/hanoi.jpg',
              short: 'Vietnam',
              caption: 'Phô Hàng Gai - Hanoi, Vietnam'
            },
            {
              src: 'assets/travel/phuket.jpg',
              short: 'Thailand',
              caption: 'Raya Island - Phuket, Thailand'
            }
          ]
        },
        {
          title: 'Others',
          icon: 'globe',
          content: [
            {
              src: 'assets/passions/football.jpg',
              short: 'Sport',
              caption: 'Football (& other sports)'
            },
            {
              src: 'assets/passions/cooking.jpg',
              short: 'Cooking',
              caption: 'Amateur cook'
            },
            {
              src: 'assets/passions/videomaking.jpg',
              short: 'Video',
              caption: 'Realization & video editing (https://www.youtube.com/channel/UCFRGIh_bs7CarhfiCnBupAQ)'
            },
            {
              src: 'assets/passions/videogames.jpg',
              short: 'Video games',
              caption: 'Fan of video games, especially the Final Fantasy series'
            }
          ]
        }
      ]
    },
    {
      title: 'Contact',
      className: 'contact',
      sectionColor: '#DA4453',
      email: 'maximetavernier92@gmail.com',
      links: [
        {
          name: 'Linkedin',
          icon: 'linkedin',
          url: 'https://www.linkedin.com/in/maxime-tavernier-31b82899'
        },
        {
          name: 'Twitter',
          icon: 'twitter',
          url: 'https://twitter.com/MaxouTatav'
        },
        {
          name: 'GitHub',
          icon: 'github',
          url: 'https://github.com/maximetavernier'
        }
      ],
      help: {
        cv: {
          caption: 'Find my resume here.',
          link: 'assets/cv/en.pdf'
        },
        info: {
          caption: 'About...',
          header: {
            title: 'Informations',
            closeLabel: 'Close dialog'
          },
          infos: [
            {
              title: 'pagePilling',
              descr: 'JQuery plugin to create a scrolling website',
              url: 'https://alvarotrigo.com/pagePiling/',
              _blank: false,
              icon: 'heart'
            },
            {
              title: 'Codrops',
              descr: 'Useful resources and inspiration for creative minds',
              url: 'https://tympanus.net/codrops/',
              _blank: false,
              icon: 'codrops'
            },
            {
              title: 'React.js',
              descr: 'This website is powered by React',
              url: 'https://facebook.github.io/react/',
              _blank: false,
              icon: 'react'
            }
          ],
          footer: {
            copyright: [
              'Copyright © 2017 - Maxime Tavernier.',
              'All Rights Reserved.'
            ]
          }
        }
      }
    }
  ]
};