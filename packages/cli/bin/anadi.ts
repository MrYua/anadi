#!/usr/bin/env node
import {Command} from "commander";

async function bootstrap() {
    const program = new Command();

    program.version(`varlet-cli`).usage('<command> [options]')

}

bootstrap();
