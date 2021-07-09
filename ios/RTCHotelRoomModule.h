//  RCTCalendarModule.h
#import <React/RCTBridgeModule.h>
// RCTCalendarModule.m
#import "RCTCalendarModule.h"

@interface RCTCalendarModule : NSObject <RCTBridgeModule>

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}
@implementation RCTCalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE(HotelRoom);


@end
