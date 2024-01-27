import React from "react";
import * as FaIcons from "react-icons/fa";
import * as Hi2Icons from "react-icons/hi2";
import * as ImIcons from "react-icons/im";
import * as GiIcons from "react-icons/gi";
import * as PiIcons from "react-icons/pi";
import * as Io5Icons from "react-icons/io5";

export const SidebarData = [
    {
        title: 'Roulette',
        path: '/',
        icon: <GiIcons.GiCarWheel />,
        cName: 'nav-text'
    },
    {
        title: 'Coinflip',
        path: '/',
        icon: <PiIcons.PiCoinsDuotone />,
        cName: 'nav-text'
    },
    {
        title: 'Crash',
        path: '/',
        icon: <GiIcons.GiNetworkBars />,
        cName: 'nav-text'
    },
    {
        title: 'Plinko',
        path: '/',
        icon: <GiIcons.GiBubbles />,
        cName: 'nav-text'
    },
    {
        title: 'Dice',
        path: '/',
        icon: <FaIcons.FaDice />,
        cName: 'nav-text'
    },
    {
        title: 'Leaderboard',
        path: '/',
        icon: <Hi2Icons.HiBars3BottomRight />,
        cName: 'nav-text'
    },
    {
        title: 'Statistics',
        path: '/',
        icon: <ImIcons.ImStatsBars />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/',
        icon: <Io5Icons.IoSettings />,
        cName: 'nav-text'
    },
]