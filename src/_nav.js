export default {
  items: [
    {
    //  name: 'Base',
      name: 'Publicité',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Ajouter publicité',
          url: '/base/AddPub',
          icon: 'icon-puzzle',
        },
        {
          name: 'Supprimer publicité',
          url: '/base/DeletePub',
          icon: 'icon-puzzle',
        },
     
      ],
    },
    {
    //  name: 'Buttons',
      name: 'Salon de thé',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Ajouter salon de thé',
          url: '/buttons/AddRestaurant',
          icon: 'icon-cursor',
        },
        {
          name: 'Ajouter plat',
          url: '/buttons/AddPlat',
          icon: 'icon-cursor',
        },
        {
          name: 'Ajouter categorie',
          url: '/buttons/AddCategory',
          icon: 'icon-cursor',
        },
        
      ],
    },
  ],
};
