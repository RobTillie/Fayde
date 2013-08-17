/// <reference path="AnimationUsingKeyFrames.ts" />
/// CODE
/// <reference path="ObjectKeyFrame.ts" />

module Fayde.Media.Animation {
    export class ObjectAnimationUsingKeyFrames extends AnimationUsingKeyFrames {
        static Annotations = { ContentProperty: AnimationUsingKeyFrames.KeyFramesProperty };

        Resolve(target: DependencyObject, propd: DependencyProperty): boolean {
            var enumerator = this.KeyFrames.GetEnumerator();
            while (enumerator.MoveNext()) {
                var keyFrame = <ObjectKeyFrame>enumerator.Current;
                var value = keyFrame.Value;
                if (value == null) {
                    keyFrame.ConvertedValue = undefined;
                } else {
                    var converted = value;
                    //TODO: Convert - return false if error converting
                    keyFrame.ConvertedValue = converted;
                }
            }
            return super.Resolve(target, propd);
        }
    }
    Nullstone.RegisterType(ObjectAnimationUsingKeyFrames, "ObjectAnimationUsingKeyFrames");
}