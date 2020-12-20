import React from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MovieIcon from '@material-ui/icons/Movie';
import AssessmentIcon from "@material-ui/icons/Assessment";
import GroupIcon from "@material-ui/icons/Group";
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
export const LeftBarData = [
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    link: "/admin/login",
  },
  {
    title: "Analitics",
    icon: <AssessmentIcon />,
    link: "/admin/graph",
  },
  {
    title: "Add Movie",
    icon: <MovieIcon />,
    link: "/admin/movie/add",
  },
  {
    title: "Users",
    icon: <GroupIcon />,
    link: "/admin/user/db",
  },
  {
    title: "Movies",
    icon: <MovieFilterIcon />,
    link: "/admin/movie/db",
  },
  {
    title: "Add Category",
    icon: <NoteAddIcon />,
    link: "/admin/movie/category",
  },
  {
    title: "Add New Cast",
    icon: <NoteAddIcon />,
    link: "/admin/movie/cast",
  },
  {
    title: "Add New Director",
    icon: <NoteAddIcon />,
    link: "/admin/movie/director",
  },
  {
    title: "Add New Producer",
    icon: <NoteAddIcon />,
    link: "/admin/movie/producer",
  }
];