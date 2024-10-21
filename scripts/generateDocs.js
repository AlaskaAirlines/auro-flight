import {processDocFiles} from '@aurodesignsystem/auro-library/scripts/build/generateDocs.mjs'
import {Logger} from '@aurodesignsystem/auro-library/scripts/utils/logger.mjs'

processDocFiles('master').
  then(() => {
    Logger.info("Done processing documentation files.");
  }).
  catch(Logger.error);
