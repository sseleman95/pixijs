export const localUniformMSDFBit = {
    name: 'local-uniform-msdf-bit',
    vertex: {
        header: /* wgsl */`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,
        main: /* wgsl */`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `
    },
    fragment: {
        header: /* wgsl */`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,
        main: /* wgsl */` 
            outColor = vColor * calculateMSDFAlpha(outColor, localUniforms.uDistance);
        `

    }

};