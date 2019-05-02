import React, { Component } from 'react';
import MovieDisplay from '../display/MovieDisplay';
import Search from './Search';
import axios from 'axios';
import apiKey from '../../config_keys';

const baseURL = 'https://api.themoviedb.org/3/';
