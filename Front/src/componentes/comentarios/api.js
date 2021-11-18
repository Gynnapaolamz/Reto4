export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Muy buen menú",
      username: "Diego Carmona",
      userId: "1",
      parentId: null,
      createdAt: "2021-10-30T23:00:33.010+02:00",
    },
    {
      id: "2",
      xbody: "Lo mismo pienso, excelente menú",
      username: "Camila Rodriguez",
      userId: "2",
      parentId: null,
      createdAt: "2021-11-01T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Buen servicio al cliente",
      username: "John Mario",
      userId: "2",
      parentId: null,
      createdAt: "2021-11-02T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Muy buena atención",
      username: "Karen Contreras",
      userId: "2",
      parentId: null,
      createdAt: "2021-11-03T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Juan",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
