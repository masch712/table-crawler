#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { OpenTableCrawlerStack } from '../lib/open-table-crawler-stack';

const app = new cdk.App();
new OpenTableCrawlerStack(app, 'OpenTableCrawlerStack');
