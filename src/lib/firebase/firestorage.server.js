import { PUBLIC_STORAGE_BUCKET } from '$env/static/public';
import { storage } from '$lib/firebase/firebase.server.js';
import { tmpdir } from 'os';
import fs from 'fs';
import path from 'path';
import { v5 as uuidv5 } from 'uuid';
