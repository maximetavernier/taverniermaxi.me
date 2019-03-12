module.exports = {
  title: 'Maxime Tavernier - Portfolio en ligne',
  sections: [
    {
      title: 'À propos',
      className: 'about',
      sectionColor: '#3E4651',
      info: {
        firstname: 'Maxime',
        lastname: 'Tavernier',
        asset: 'assets/me.jpg',
        title: 'Portfolio en ligne',
        subtitle: [
          'Developpeur à plein temps,',
          'Artiste le reste du temps.'
        ],
        descr: [
          'Master en ingénierie informatique',
          'Passioné par le web & le mobile'
        ],
        seemore: 'En voir plus'
      }
    },
    {
      title: 'Études & Expériences',
      className: 'exps',
      sectionColor: '#2980B9',
      studiesTitle: 'Études',
      internshipsTitle: 'Stages en entreprise',
      exps: [
        {
          start: '2011',
          end: '2012',
          type: 'study',
          title: 'ESIEE (Noisy-le-Grand, France)',
          url: 'http://www.esiee.fr/',
          subtitle: 'École Supérieure d\'Ingénieurs en Électronique et Électrotechnique',
          descr: '1ère année du cycle d\'ingénieur',
          asset: 'assets/esiee.png'
        },
        {
          start: '2012',
          end: '2016',
          type: 'study',
          title: 'EPITA (Kremlin-Bicêtre, France)',
          url: 'http://www.epita.fr/',
          subtitle: 'École Pour l’Informatique et les Techniques Avancées',
          descr: 'Master - Majeur MTI (Multimédia et Technologies de l\'Information)',
          asset: 'assets/epita.png'
        },
        {
          start: 'Juin 2009',
          end: 'Juillet 2009',
          type: 'internship',
          title: 'NRG Telecom (Plymouth, Angleterre)',
          url: 'http://www.nrgtelecom.co.uk/',
          subtitle: 'Service de création et gestion de site web',
          descr: 'Développement de site web, gestion via le CMS \'Joomla\' (HTML/CSS)',
          asset: 'assets/nrgtelecom.png'
        },
        {
          start: 'Octobre 2014',
          end: 'Décembre 2014',
          type: 'internship',
          title: 'Wakanim (Roubaix, France)',
          url: 'https://www.wakanim.tv/fr/v2',
          subtitle: 'Service de diffusion d\'animation japonaise',
          descr: 'Intégration web en ASP.NET, adaptation du CMS \'MonoX\' (C#, HTML5/CSS3, T-SQL)',
          asset: 'assets/wakanim.png'
        },
        {
          start: 'Mai 2016',
          end: 'Novembre 2016',
          type: 'internship',
          title: 'Gatewang (Guangzhou, Chine)',
          url: 'http://www.bitgaiwang.com/',
          subtitle: 'Plateforme de e-commerce et commerce O2O',
          descr: 'Intégration web en back-end. Test de sécurité et fonctionnel (C#, HTML5/CSS3, T-SQL)',
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
                'Connaissance approfondie des balises',
                'Norme W3C'
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
          title: 'Base de données',
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
          title: 'Serveur & Deployement',
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
              name: 'Script Shell',
              icon: 'terminal',
              facts: [

              ],
              level: 4
            }
          ]
        },
        {
          title: 'Outils de développement',
          list: [
            {
              name: 'Suite JetBrains',
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
      title: 'Projets réalisés',
      className: 'projects',
      sectionColor: '#34495E',
      tooltip: 'Decouvrir',
      projects: [
        {
          title: 'YakaLfer',
          descr: 'Intranet de gestion de resources',
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
              caption: 'Vue de la liste des clients, avec un index latéral pour simplifier la navigation'
            },
            {
              src: 'assets/yakalfer/02.jpg',
              caption: 'Vue de trajet pour un transporteur. Le parcours donné est calculé pour être le plus court'
            },
            {
              src: 'assets/yakalfer/03.jpg',
              caption: 'Vue des factures pour un client'
            }
          ]
        },
        {
          title: 'Fit-In',
          descr: 'Plateforme d\'échange de \'bons plans\'',
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
              caption: 'Choix des centres d\'intérêt'
            },
            {
              src: 'assets/fitin/02.jpg',
              caption: 'Liste d\'activités à proximité'
            },
            {
              src: 'assets/fitin/03.jpg',
              caption: 'Fiche descriptive d\'un appartement'
            }
          ]
        },
        {
          title: 'Musa',
          descr: 'Réseau social autour de l\'univers musical',
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
              caption: 'Fil d\'actualité'
            },
            {
              src: 'assets/musa/02.png',
              caption: 'Panneau de navigation'
            },
            {
              src: 'assets/musa/03.png',
              caption: 'Lecteur audio'
            }
          ]
        },
        {
          title: 'Youcast',
          descr: 'Service de diffusion de vidéo, type Youtube',
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
              caption: 'Liste des vidéos accessible via le service'
            },
            {
              src: 'assets/youcast/02.png',
              caption: 'Filtre par nom'
            },
            {
              src: 'assets/youcast/03.png',
              caption: 'Fiche descriptive d\'une vidéo en portrait...'
            },
            {
              src: 'assets/youcast/04.png',
              caption: '... ou en paysage'
            },
            {
              src: 'assets/youcast/05.png',
              caption: 'Visualisation de la vidéo'
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
          title: 'Musique',
          icon: 'music',
          content: [
            {
              src: 'assets/music/pcaif1.jpg',
              short: 'Chant',
              caption: 'Les petits chanteurs d\'Asnières - 1999'
            },
            {
              src: 'assets/music/pcaif2.jpg',
              short: 'Piano',
              caption: 'Les petits chanteurs d\'Asnières - 2013'
            },
            {
              src: 'assets/music/pcaif3.jpg',
              short: 'Chant',
              caption: 'Les petits chanteurs d\'Asnières - 2014'
            },
            {
              src: 'assets/music/pcaif4.jpg',
              short: 'Chant',
              caption: 'Les petits chanteurs d\'Asnières - 2014'
            },
            {
              src: 'assets/music/sono.png',
              short: 'Sonorisation',
              caption: 'Installation & mixage pour quelques concerts'
            }
          ]
        },
        {
          title: 'Photographie',
          icon: 'photo',
          content: [
            {
              src: 'assets/photo/instagram01.jpg',
              short: '',
              caption: 'Depuis Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram02.jpg',
              short: '',
              caption: 'Depuis Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram03.jpg',
              short: '',
              caption: 'Depuis Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram04.jpg',
              short: '',
              caption: 'Depuis Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram05.jpg',
              short: '',
              caption: 'Depuis Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram06.jpg',
              short: '',
              caption: 'Depuis Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram07.jpg',
              short: '',
              caption: 'Depuis Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram08.jpg',
              short: '',
              caption: 'Depuis Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/instagram09.jpg',
              short: '',
              caption: 'Depuis Instagram (https://www.instagram.com/maxlarsouille/)'
            },
            {
              src: 'assets/photo/montmartre.jpg',
              short: '',
              caption: 'Butte Montmartre - Paris'
            }
          ]
        },
        {
          title: 'Voyage',
          icon: 'plane',
          content: [
            {
              src: 'assets/travel/berlin.jpg',
              short: 'Allemagne',
              caption: 'Mur de Berlin - Berlin, Allemagne'
            },
            {
              src: 'assets/travel/guangzhou.jpg',
              short: 'Chine',
              caption: 'Tour de Canton - Guangzhou, Chine'
            },
            {
              src: 'assets/travel/hongkong.jpg',
              short: 'Hong Kong',
              caption: 'Mong Kok - Hong Kong'
            },
            {
              src: 'assets/travel/annecy.jpg',
              short: 'Annecy',
              caption: 'Lac d\'Annecy - Annecy, France'
            },
            {
              src: 'assets/travel/singapore.jpg',
              short: 'Singapour',
              caption: 'Marina Bay & Garden by the bay - Singapour'
            },
            {
              src: 'assets/travel/siemreap.jpg',
              short: 'Cambodge',
              caption: 'Angkor Wat - Siem Reap, Cambodge'
            },
            {
              src: 'assets/travel/hanoi.jpg',
              short: 'Vietnam',
              caption: 'Phô Hàng Gai - Hanoï, Vietnam'
            },
            {
              src: 'assets/travel/phuket.jpg',
              short: 'Thaïlande',
              caption: 'Ile de Raya - Phuket, Thaïlande'
            }
          ]
        },
        {
          title: 'Autres',
          icon: 'globe',
          content: [
            {
              src: 'assets/passions/football.jpg',
              short: 'Sport',
              caption: 'Football (& autres sports) en amateur'
            },
            {
              src: 'assets/passions/cooking.jpg',
              short: 'Cuisine',
              caption: 'Cuisinier en amateur'
            },
            {
              src: 'assets/passions/videomaking.jpg',
              short: 'Vidéo',
              caption: 'Réalisation & montage vidéo (https://www.youtube.com/channel/UCFRGIh_bs7CarhfiCnBupAQ)'
            },
            {
              src: 'assets/passions/videogames.jpg',
              short: 'Jeux vidéo',
              caption: 'Fan de jeux vidéo, en particulier la série Final Fantasy'
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
          caption: 'CV papier',
          link: 'assets/cv/fr.pdf'
        },
        info: {
          caption: 'Á propos',
          header: {
            title: 'Informations',
            closeLabel: 'Fermer le dialogue'
          },
          infos: [
            {
              title: 'pagePilling',
              descr: 'Plugin jQuery pour créer un site web sous forme de slider',
              url: 'https://alvarotrigo.com/pagePiling/',
              _blank: false,
              icon: 'heart'
            },
            {
              title: 'Codrops',
              descr: 'Ressources utiles et inspiration pour les esprits créatifs',
              url: 'https://tympanus.net/codrops/',
              _blank: false,
              icon: 'codrops'
            },
            {
              title: 'React.js',
              descr: 'Cette page fonctionne grâce à React.',
              url: 'https://facebook.github.io/react/',
              _blank: false,
              icon: 'react'
            }
          ],
          footer: {
            copyright: [
              'Copyright © 2017 - Maxime Tavernier.',
              'Tout droits reservés.'
            ]
          }
        }
      }
    }
  ]
};