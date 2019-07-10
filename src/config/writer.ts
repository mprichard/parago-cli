//
//  writer.ts
//  Parago
// 
//  Created by Wess Cope (wess@frenzylabs.com) on 07/10/19
//  Copyright 2019 FrenzyLabs,llc.
//

import * as fs    from 'fs';
import * as path  from 'path';
import {safeDump} from 'js-yaml';

const WriteYaml = (obj:object, to:string) => {
  let data:string = safeDump(obj);
  
  fs.writeFile(to, data, (err) => {
    if(err) {
      console.error("Write File Error: ", err);
    }
  });
}

export default WriteYaml;