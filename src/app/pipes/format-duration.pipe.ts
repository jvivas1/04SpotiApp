import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

  transform(duration_ms: any): any {
    let result='';

    let totalSeconds = duration_ms / 1000;
    let totalMinutes = totalSeconds / 60;
    let totalHours = totalMinutes / 60;

    let seconds:any = Math.floor(totalSeconds) % 60;
    let minutes:any = Math.floor(totalMinutes) % 60;
    let hours:any = Math.floor(totalHours) % 60;

    if (hours !== 0) {
        result += hours+':';

        if (minutes.toString().length == 1) {
            minutes = '0'+minutes;
        }
    }

    result += minutes+':';

    if (seconds.toString().length == 1) {
        seconds = '0'+seconds;
    }

    result += seconds;

    return result;
  }

}
